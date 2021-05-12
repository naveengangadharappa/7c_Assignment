import { securedBrowserCache } from 'secured-browser-storage';
securedBrowserCache.config(process.env.LocalStorage_Key || 'Naveen@123');

const Offlinestorage = async (params) => {
    return new Promise((resolve, reject) => {
        let result = { status: false, data: '', message: '' };
        switch (params.choice) {
            case "adddata":
                securedBrowserCache.clear();
                securedBrowserCache.setItem(params.key, params.value)
                result.status = true;
                break;
            case "getdata":
                result.data = securedBrowserCache.getItem(params.key);
                result.status = true;
                break;
            case "deletedata": securedBrowserCache.removeItem(params.key);
                result.status = true;
                break;
            case "clear": securedBrowserCache.clear();
                result.status = true;
                break;
            default: result.status = false;
                result.message = "choice cannot be identified";
                break;
        }
        resolve(result);
    });
}

export default Offlinestorage