import PL from './translations/PL_pl.json'
import EN from './translations/EN_us.json'
import ES from './translations/ES_es.json'
import { useGlobalState } from '../hooks/GlobalStateProvider'


const T = (key: string) => {
    const { state } = useGlobalState();
    switch (state.lang){
        case "PL":
            return (
                PL[key as keyof typeof PL]
            )
        case "EN":
            return (
                EN[key as keyof typeof EN]
            )
        case "ES":
            return (
                ES[key as keyof typeof ES]
            )
    }
    return `<T not found for key '${key}'>`
}

const Polish = () => {
    const { state } = useGlobalState();
    if (state.lang === "PL") {
        return true
    }
    else {
        return false
    }
}

export default T
export {T, Polish}