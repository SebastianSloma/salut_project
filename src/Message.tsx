export const Message = ({author, children}) =>{
    return (
        <p>
            <b>{author}</b>: {children}
        </p>
    )
}