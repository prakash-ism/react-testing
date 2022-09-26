export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div role="profile-desc">Private Profile Component. Name is {name}</div>
  );
};
