"use client"
import { useAuthStore } from '@/store/Auth'
import React from 'react'

export default function loginPage() {
    const {login} = useAuthStore();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        setIsLoading(true);
        setError("");

        const response = await login(email.toString(), password.toString());

        if (response.error) {
            setError(response.error!.message);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    );
}
