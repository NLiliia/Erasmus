import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await login(email, password);

            if (success) {
                toast.success("You have been successfully logged in");
                navigate("/");
            } else {
                toast.error("Bad credentials. Please, try again.");
            }
        } catch (error) {
            console.error("Error logging in: ", error);
            toast.error("Error logging in! Please, try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-light-blue-600 mb-1">Erasmus+ Portal</h1>
                    <p className="text-gray-600 text-sm">Авторизація для користувачів системи</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Вхід</CardTitle>
                        <CardDescription>Введіть ваш email та пароль</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Електронна пошта</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Пароль</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                className="w-full bg-light-blue-600 hover:bg-light-blue-400"
                                disabled={isLoading}
                            >
                                {isLoading ? "Вхід..." : "Увійти"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
