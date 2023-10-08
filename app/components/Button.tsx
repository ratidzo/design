export default function Button(props: any) {
    return (
        <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8
        hover:bg-indigo-400 duration-500 font-bold">
            {props.children}
        </button>
    )
}