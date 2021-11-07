import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false) //процесс загрузки
    const [error, setError] = useState(false) //потенциальные ошибки если есть

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            let response = await fetch(url, { method, body, headers })
            let res = await response.json()
            let resJson = await res['token']

            if (response.ok) {
                let tokens = "test";
                localStorage.setItem("tokens", resJson); //добавление токена  в localstorage
                // document.location.href = "http://localhost:3000/";


                // async function testing1() {
                //     let testing1 = await fetch('http://45.86.180.111:3000/person', {
                //         method: 'GET',
                //         headers: {
                //             'authorization': localStorage.getItem('tokens')
                //         }
                //     })
                //         // .then(res => res.json())
                //         // .then(resJson => resJson['userDataId'])
                //         // .then(userId => {
                //         //     async function testing2() { 
                //         //     let testing2 = await fetch('http://79.174.13.220:8080/api/userDatas/' + userId + '/specialist');
                //         //     if(testing2.ok){
                //         //         let specialist = response.headers.get('Authorization'); //получение токена
                //         //         localStorage.setItem("specialist", specialist);
                //         //         document.location.href = "http://your-services.surge.sh"; //редирект при успешном входе
                //         //     }
                //         //     else{
                //         //         alert("Вы не исполнитель");
                //         //     }
                //         // }
                //         // testing2();
                //         // });
                // }
                // testing1();
            }
            else{
                alert("Вы еще не зарегистрированы!")
            }
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false)
            return data  //прилетает с сервера

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)

    return { loading, request, error, clearError }
}