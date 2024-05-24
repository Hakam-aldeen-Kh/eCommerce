import { Heading } from "@components/common";
import { useAppSelector } from "@store/hooks";

function Profile() {
  const accountInfo = useAppSelector((state) => state.auth.user);
  return (
    <>
      <Heading title="Account Info" />
      <ul>
        <li>First Name : {accountInfo?.firstName}</li>
        <li>Last Name : {accountInfo?.lastName}</li>
        <li>Email : {accountInfo?.email}</li>
      </ul>
    </>
  );
}

export default Profile;
