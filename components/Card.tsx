type CardProps = {
    title? : string;
    id? : string;
    children?: React.ReactNode
};




export default function Card({ title, id, children }: CardProps) {

    return (
        <div id = {id} className="Card">{children}</div>
    )


}