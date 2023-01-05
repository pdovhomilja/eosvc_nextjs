import Head from "next/head";
import { getSession, useSession, signOut } from "next-auth/react";
import AppLayoutV2 from "../layout/AppLayoutV2";
import { useRouter } from "next/router";
import Main from "../components/v2/Main";
import PageTemplate from "../components/v2/PageTemplate";
import { useQuery } from "react-query";
import { getUserId } from "../modules/user/apiCalls/getUserId";
import { useDispatch } from "react-redux";
import { update } from "../redux/userSlice";
import LoadingSpinner from "../components/loadings/LoadingSpinner";

const pageTitle = "Dashboard";

const Template = () => {
  const { data: session } = useSession();
  const { isLoading, data } = useQuery("user", () =>
    getUserId(session.user.email)
  );
  const router = useRouter();

  //const isLoading = true;
  if (isLoading)
    return <LoadingSpinner message={"Aplikace se inicializuje ..."} />;

  return (
    <div className="w-full">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {session ? User({ session }) : router.push("/login")}
    </div>
  );
};

export default Template;

// Authorize User
function User() {
  //console.log(session);
  return (
    <AppLayoutV2>
      <PageTemplate pageTitle={pageTitle}>
        <Main />
      </PageTemplate>
    </AppLayoutV2>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
