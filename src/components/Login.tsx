type LoginProps = {
    onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
    return (
        <div>
        <h1>ログイン</h1>

        <button onClick={onLogin}>
            ログイン
        </button>
        </div>
    );
}

export default Login;