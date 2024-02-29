import { useParams } from 'react-router-dom'
import s from './peopleDetails.module.css'
import { useGetFetchQuery } from '../../custom-hooks/useGetFetchQuery'
const PeopleDetails = () => {
  const { id } = useParams()
  const actors = useGetFetchQuery('actors')
  let actorDetails
  if (actors) {
    actorDetails = actors?.find((actor) => actor.id == id)
  } else {
    actorDetails = {
      id: 1,
      name: 'Marlon Brando',
      birth_year: 1924,
      death_year: 2004,
      nationality: 'American',
      known_for: [
        'The Godfather',
        'A Streetcar Named Desire',
        'On the Waterfront'
      ],
      awards: ['Oscar', 'Golden Globe'],
      biography:
        'Marlon Brando was an American actor and one of the most influential performers in the history of film. He is widely regarded as one of the greatest actors of all time.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/220px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png'
    }
  }

  const renderActorDetails = () => {
    return (
      <div className={s.actorDetailsWrapper}>
        <div className={s.actorImgWrapper}>
          <img className={s.actorImg} src={actorDetails.image} />
        </div>

        <div className={s.actorBio}>
          <h1 className={s.actorName}>{actorDetails.name}</h1>
          <h3 className={s.actorInfo}>Biography</h3>
          <div className={s.actorBiodata}>{actorDetails.biography}</div>
          <h3 className={s.actorInfo}>Personal Info</h3>
          <div className={s.actorPersonalInfo}>
            <div className={s.actorPersonalItem}>
              <label className={s.actorPersonalLabel}>Nationality:</label>
              <span className={s.actorPersonalValue}>
                {actorDetails.nationality}
              </span>
            </div>
            <div className={s.actorPersonalItem}>
              <label className={s.actorPersonalLabel}>Year of Birth:</label>
              <span className={s.actorPersonalValue}>
                {actorDetails.birth_year}
              </span>
            </div>
            <div className={s.actorPersonalItem}>
              <label className={s.actorPersonalLabel}>Year of Death:</label>
              <span className={s.actorPersonalValue}>
                {actorDetails.death_year}
              </span>
            </div>
            <div className={s.actorPersonalItem}>
              <label className={s.actorPersonalLabel}>Known For:</label>
              <span className={s.actorPersonalValue}>
                {actorDetails?.known_for?.join(', ')}
              </span>
            </div>
            <div className={s.actorPersonalItem}>
              <label className={s.actorPersonalLabel}>Awards:</label>
              <span className={s.actorPersonalValue}>
                {actorDetails?.awards?.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className={s.actorDetailsContainer}>
        {actorDetails && renderActorDetails()}
      </div>
    </>
  )
}
export default PeopleDetails
