import { Flip, toast } from 'react-toastify';
import { TypeOptions } from 'react-toastify/dist/types';
import CustomToast from '../Components/Common/CutomToast';

export const showToast = (type: string, message: string, title: string = "") => {
    if (type.toLowerCase() === 'success') return toast.success(<CustomToast title={title ?? "Success"} message={message} />,)
    else if (type.toLowerCase() === 'error') return toast.error(<CustomToast title={title ?? "Error"} message={message} />)
    else if (type.toLowerCase() === 'info') return toast.info(<CustomToast title={title ?? "Info"} message={message} />)
}
export const loadingToast = (title: string, message: string, type: TypeOptions, percentage?: number): string => {
    const id = toast.loading(
        <CustomToast title={title} message={message} />,
        {
            type: type,
            progress: percentage,
            autoClose: 4000
        }
    )
    return id.toString()
}
export const isExistToast = (id: string): any => {
    return toast.isActive(id)
}
export const updateToast = (id: string, title: string, type: TypeOptions, message: string, percentage: number): any => {
    if (type.toLowerCase() === 'info') {
        toast.update(id, {
            render: <CustomToast title={title} message={message} />,
            type: type,
            progress: percentage,
            transition: Flip,
            hideProgressBar: false,
        });
    }
    else {
        toast.dismiss(id);
        showToast(type, message, title)

    }
}
export const dismissToast = (id?: string): any => {
    toast.dismiss(id);
}