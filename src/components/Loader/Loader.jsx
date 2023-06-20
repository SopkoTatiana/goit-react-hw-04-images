import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4267b2"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClassName
      visible={true}
    />
  );
}
