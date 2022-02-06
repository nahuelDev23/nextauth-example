import { useSession } from "next-auth/react"

const AuthGuard = ({ children }) => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    
    if (!initializing && session?.user) {
        return <>{children}</>
    }

   
    return null
}

export default AuthGuard;