export function VideoCard( props: any){
    return <div className="p-2 cursor-pointer">
        <img className="rounded-xl" src={ props.image } />
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1 pl-2">
                <img className={"rounded-full w-14 h-14 "} src={ props.thumImage } />
            </div>
            <div className="col-span-11 ">
                <div> { props.title } </div>
                <div className="text-sm text-gray-400 " > { props.author } </div>
                <div className="text-sm text-gray-400 " > { props.views } | {props.timestamp } </div>
            </div>
        </div>
    </div>
}