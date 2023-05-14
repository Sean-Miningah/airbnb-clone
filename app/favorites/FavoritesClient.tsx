import { SafeListing, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

type Props = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
  
}

function FavoritesClient({
  listings,
  currentUser
}: Props) {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of palces you have favorited!"
      />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
        "
      >
        {listings.map((listing, index) => (
          <ListingCard
            key={index}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoritesClient