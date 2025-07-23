import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="bg-blue-400 shadow hover:shadow-xl rounded-2xl">
            <main className="flex flex-col text-white">
                <h1>{title}</h1>
                <p>{content}</p>
            </main>
        </div>
    )
}

export default Card;