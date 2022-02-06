import { getProviders, signIn as SingIntoProvider } from 'next-auth/react'
import Layout from '../../components/Layout';
const signIn = ({ providers }) => {
    return (
        <Layout>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SingIntoProvider(provider.id,{callbackUrl:'/'})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </Layout>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}
export default signIn;