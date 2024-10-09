
export const Child = ({name, handelChangeCount}) => {

    const handelClick = () => {
        handelChangeCount(prevCount => prevCount + 1)
    }

    return <>
    <p>PropsName : {name}</p>
    <button onClick={handelClick}>count + 1</button>
    </>
}