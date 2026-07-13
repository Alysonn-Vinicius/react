import { Item } from "../types/item";

type AddAction = {
    type: 'add' //tipo/acao de adicionar
    payload: string
}

type EditTextAction = {
    type: 'EditText' //tipo/acao de editar
    payload: { id: number, newText: string }
}

type doneAction = {
    type: 'toggleDone'
    payload: number
}

type RemoveAction = {
    type: 'remove'
    payload: number
}



type ListActions = AddAction | EditTextAction | doneAction | RemoveAction;
//dados originais, e acoes executadas
export const listReducer = (list: Item[], actions: ListActions) => {
    //execucoes de alguma coisa
    /**
     * action.type = tipo da acao ou algo que vai fazer
     * action.payload = carga que é enviada(tipos,dados)
     */
    switch (actions.type) {
        case 'add':
            return [...list,
            {
                id: Date.now(),
                text: actions.payload,
                done: false
            }
            ]
        case 'EditText':
            return list.map((item)=> {
                if(item.id === actions.payload.id){
                    return {...item, text: actions.payload.newText};
                }
                return item;
            })
        case "remove":
            return list.filter(item => item.id !== actions.payload)

        case 'toggleDone':
            return list.map((item)=> {
                if(item.id === actions.payload){
                    return {...item, done: !item.done};
                }
                return item;
            })

        default: return list;
    }

}