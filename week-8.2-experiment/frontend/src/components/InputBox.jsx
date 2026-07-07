export function InputBox({label, placeHolder, onChange }){
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input type="text" onChange={onChange} placeholder={placeHolder} className="w-full px-2 py-1 rounded border border-slate-200" />
    </div>
}