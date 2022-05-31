import { Header } from "./header"

export default function MainContainer({children}) {
    return (
        <>
            <Header />
            <div>{ children }</div>
        </>
    )
}