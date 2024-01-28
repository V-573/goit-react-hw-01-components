import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
    ProfileText,
    ProfileList,
    ProfileListItem,
    SpanItem,
  
} from './Profile.styles';

const Profile = ({ username, tag, stats, location, avatar }) => {
    return (
        <>
<ProfileContainer>
    <ProfileDescription>
        <ProfileImage src={avatar} />
        <ProfileText className="name">{username}</ProfileText>
        <ProfileText className="tag">{tag}</ProfileText>
        <ProfileText className="location">{location}</ProfileText>
    </ProfileDescription>
        <ProfileList className="stats">
                    
      {/* utilizamos Object.entries(stats) para convertir el objeto "stats"
       en una matriz de pares clave.valor que luego podemos iterar      */}
                    {Object.entries(stats).map(([key, value]) => (
               
                        <ProfileListItem key={key}>
                            <SpanItem className="key">{key}</SpanItem>
                            <SpanItem className="value">{value}</SpanItem>

                     </ProfileListItem>


                    ))}
            
               
        </ProfileList>
                
</ProfileContainer>
      
        </>





  );
};

export default Profile;
