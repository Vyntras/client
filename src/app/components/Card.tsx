import { Card as ICard } from "@/types/Card";
import { format } from 'date-fns'
import { FC } from "react";


interface CardData {
    card: ICard
}


const Card: FC<CardData> = ({ card }) => {


    return (
        <div className="flex flex-col p-2 border w-52 rounded-md">
            <img className="border w-full aspect-square" />

            <h2 className="font-medium text-lg">{card.name}</h2>
            {/* <label>{String(card.createdAt)}</label> */}
            <label className="text-xs text-gray-500">{format(new Date(card.createdAt), 'MM/dd/yyyy')}</label>
            <p className="text-sm">{card.description} fasefiuasehf iasdufh aseifuha sdofiuashe foaisudhf aosieufh aosdiufh aseoifuhas doifuhasef</p>
            <label className="self-end">${String(card.price)}</label>
           
        </div>

    )
}


export default Card