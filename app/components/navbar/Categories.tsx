'use client'

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland, 
  GiWindmill 
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

import Container from "../Container";
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!'
  },
  {
    label: 'WindMills',
    icon: GiWindmill,
    description: 'This property has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern?'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is modern?'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property has castles!'
  },
  {
    label: 'Castles',
    icon: GiForestCamp,
    description: 'This property has camping activities!'
  },
  {
    label: 'Snow',
    icon: BsSnow,
    description: 'This property has snow activities!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property has caves!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property has in a barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurios!'
  }
]

type Props = {}

function Categories({}: Props) {

  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories