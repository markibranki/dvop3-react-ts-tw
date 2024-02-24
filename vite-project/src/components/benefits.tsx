export default function Benefits(props: { icon: string, text: string }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <img className="h-20 max-w-fit lg:h-14" src={props.icon} alt="" />
            <h2 className="text-sm text-center font-semibold">{props.text}</h2>
        </div>
    )
}