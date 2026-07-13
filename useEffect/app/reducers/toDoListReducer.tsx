import { Tarefa } from "@/app/types/tarefa"
import { useReducer, useState } from "react"

export const ToDoList = () => {

    const [input, setInput] = useState('');
    const [edInput, setEdInput] = useState('');
    const [edit, setEdit] = useState<number | null>(null);



    type Add = {
        type: "Add"
        payload: string
    }
    type toggle = {
        type: "toggle"
        payload: number,
    }
    type Reset = {
        type: 'reset'
    }
    type Remove = {
        type: 'remove'
        payload: number
    }
    type Edit = {
        type: 'edit'
        payload: {
            id: number
            newText: string
        }
    }

    type Actions = Add | toggle | Reset | Remove | Edit;

    //reducer
    function reducerList(list: Tarefa[], actions: Actions) {
        switch (actions.type) {
            case 'Add':
                return [...list, { id: Date.now(), text: actions.payload, done: false }]
            case 'toggle':
                return list.map(item => {
                    if (item.id === actions.payload) {
                        return { ...item, done: !item.done }
                    }
                    return item;
                })
            case 'reset':
                return [];
            case 'edit':
                return list.map(item => {
                    if (item.id === actions.payload.id) {
                        if (actions.payload.newText.trim() !== "") {
                            return { ...item, text: actions.payload.newText }
                        }
                    }
                    return item;
                })
            case 'remove':
                return list.filter(tar => tar.id !== actions.payload)
            default: return list;
        }
    }
    const [list, dispatch] = useReducer(reducerList, []);

    return (
        <div className="mx-auto">
            <div className="flex gap-2">
                <input
                    type="text"
                    className="border border-zinc-700 px-2 py-1 rounded-sm"
                    placeholder="Digite sua tarefa"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className="cursor-pointer bg-blue-700 px-2 rounded-md"
                    onClick={
                        () => {
                            dispatch({ type: 'Add', payload: input })
                            setInput('')
                        }
                    }>
                    Adicionar
                </button>
            </div>

            <h2 className="my-3">Lista: </h2>
            {list.map(tar => (
                <ul key={tar.id}>
                    <li className="flex justify-between items-center px-2 py-2 gap-3 border">
                        {
                            (edit !== tar.id) &&
                            <span className="flex gap-5">
                                <input type="checkbox" checked={tar.done} onChange={() => dispatch({ type: "toggle", payload: tar.id })} />
                                <span>{tar.text}</span>
                            </span>
                        }
                        {
                            (edit === tar.id) &&
                            <div className="flex gap-3">
                                <input type="text"
                                    value={edInput}
                                    className="border bg-zinc-700"
                                    onChange={(e) => setEdInput(e.target.value)}
                                />
                                <button onClick={() => {
                                    dispatch({ type: 'edit', payload: { id: tar.id, newText: edInput } })
                                    setEdInput('');
                                    setEdit(null);
                                }}>
                                    ✅
                                </button>
                                <button onClick={() => {
                                    setEdInput('');
                                    setEdit(null);
                                }}>
                                    cancel
                                </button>
                            </div>
                        }

                        {(edit !== tar.id) &&
                            <div className="flex  justify-between gap-2 items-center">
                                <div className="text-end border px-2 bg-red-500" onClick={() => dispatch({ type: 'remove', payload: tar.id })}>x</div>
                                <button onClick={() => {
                                    setEdit(tar.id)
                                    setEdInput(tar.text);

                                }}>
                                    Edit
                                </button>
                            </div>}
                    </li>
                </ul>
            ))}
            <button onClick={() => {
                dispatch({ type: 'reset' })
            }}>{list.length} apagar</button>
        </div>
    )
}