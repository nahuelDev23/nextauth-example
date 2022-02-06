import { useSession, signOut,signIn,getSession } from "next-auth/react";
import Image from "next/image";

const Layout = ({ children }) => {
    const { data: session } = useSession()
    return (
        <>

            {
                session
                    ?
                    <>
                        <div>{session?.user?.name}</div>
                        <Image
                            src={session?.user?.image}
                            alt={`Foto de perfil del usuario ${session?.user?.name}`}
                            width={75}
                            height={75} />
                        <button onClick={signOut}>singOut</button>
                    </>
                    :
                    <>
                        <button onClick={signIn}>singIn</button>
                    </>



            }
            {children}
        </>
    );
}

export default Layout;