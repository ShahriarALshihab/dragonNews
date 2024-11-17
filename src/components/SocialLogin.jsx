

const SocialLogin = () => {
    return (
        <div>
        <h3 className="font-semibold mb-2">Login with</h3>
        <div className="flex flex-col gap-2 font-semibold text-gray-500">
            <button className="border w-full p-2 rounded-lg flex items-center justify-center"><span><img className="h-6 w-6" src="https://i.ibb.co.com/t3rw8dB/icons8-google-48.png
" alt="" /></span>Login with Google</button>
            <button className="border w-full p-2 rounded-lg flex items-center justify-center" ><span><img  className="h-6 w-6"src="https://i.ibb.co.com/3cvpPbn/icons8-github-50.png
" alt="" /></span>Login with Github</button>
        </div>
    </div>
    );
};

export default SocialLogin;