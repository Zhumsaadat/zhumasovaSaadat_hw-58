export  interface Tasks {
    category: string;
    tasks: string[];
    id: number
}

export interface Buttons extends  UIEventInit{
    type: string,
    label: string,
    onClick: (id: number | undefined) => void

}