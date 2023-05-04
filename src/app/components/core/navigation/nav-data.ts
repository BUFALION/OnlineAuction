import {faGavel,faCalendar,faClockRotateLeft,faBookmark,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

enum NavCollection {
  AUCTION = 'Auction',
  VehicleFinder ='Vehicle finder'
}
export const navbarData=[
  {
    name: 'Auction',
    items: [
      {
        icon: faGavel,
        label: 'Auctions',
        path:'/auctions',
        collection: NavCollection.AUCTION
      },
      {
        icon: faCalendar,
        label: 'Calendar',
        path:'/calendar',
        collection: NavCollection.AUCTION
      },
      {
        icon: faClockRotateLeft,
        label: 'Active Bids',
        path:'/activeBids',
        collection: NavCollection.AUCTION
      },
      {
        icon: faBookmark,
        label: 'Saved',
        path:'/saved',
        collection: NavCollection.AUCTION
      }
    ]
  },
  {
    name: 'VehicleFinder',
    items: [
      {
        icon: faMagnifyingGlass,
        label: 'Search',
        path:'/search',
        collection: NavCollection.VehicleFinder
      }
    ]
  }
];
