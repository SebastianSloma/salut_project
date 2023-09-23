export const Message = ({author, children}: {author: string, children: string}) =>{
    return (
        <p>
            <b>{author}</b>: {children}
        </p>
    )
}