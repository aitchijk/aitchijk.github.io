import {
    faRocket,
    faPen,
    faCoins,
    faBullhorn
} from '@fortawesome/free-solid-svg-icons';

const content = {
    'navbar': {
        'brand': {
            'name': 'hijk solutions',
            'pic': require("../img/hijksolutions_2.png")
        },
        'links': [
            {
                'name': 'Services',
                'href': '/#services'
            },
            {
                'name': 'About',
                'href': '/#about'
            },
            {
                'name': 'Team',
                'href': '/#team'
            },
            {
                'name': 'Blog',
                'href': '/blogs'
            }
        ]
    },
    'header': {
        'leadIn': {
            'name': 'Build your Brand to Work for You'
        },
        'heading': {
            'name': 'hijksolutions'
        },
        'btn': {
            'name': 'TELL ME MORE',
            'href': '#services'
        }
    },
    'services': {
        'heading': {
            'name': 'Services'
        },
        'subheading': {
            'name': "Agencies offering one-size-fits-all packages don't realize that each client brings their own marketing challenges. They may charge you for services that you find easier to do yourself or bill you for services you don't need. We understand that each of our clients' needs are different and unique. Because of that, our service offerings will be built around you. After a discovery call, we develop a free audit of your marketing efforts and think of creative solutions to implement for you, cutting out the fluff and servicing you for what you truly need. Contact us to discover how we can find a solution that works for you."
        },
        'items': [
            {
                'name': 'Branding',
                'text': "A brand is more than a logo, it's your identity. Whether you already have an established brand or are looking to build it from the ground up, we can help you implement it all throughout your channels and create a concise and cohesive identity.",
                'pic': faRocket,
                'slug': 'branding',
                'page': {
                    'heading': 'Branding',
                    'subheading': 'Lorem ipsum',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
                }
            },
            {
                'name': 'Design',
                'text': 'Discussing and sharing within our team, we are able to brainstorm design ideas that are more intricate at faster speeds than any single person can. From billboards to banners, designing department is eager to help you find the picture that tells you more than a million words ever could.',
                'pic': faPen,
                'slug': 'design',
                'page': {
                    'heading': 'Design',
                    'subheading': 'Lorem ipsum',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
                }
            },
            {
                'name': 'Public Relations',
                'text': "Personally fostering your social presence takes effort and time away from your already busy hands. While you manage your business, we strive to help you manage your reputation. Public relations extends further than social media, it's your relationship to your customers.",
                'pic': faBullhorn,
                'slug': 'public-relations',
                'page': {
                    'heading': 'Public Relations',
                    'subheading': 'Lorem ipsum',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
                }
            },
            {
                'name': 'Marketing',
                'text': "While image and reputation help towards your overall success as a business, it all funnels down to marketing. Email marketing, paid advertising, word of mouth, and earned coverage are areas of knowledge that we excel at.",
                'pic': faCoins,
                'slug': 'marketing',
                'page': {
                    'heading': 'Marketing',
                    'subheading': 'Lorem ipsum',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
                }
            }
        ]
    },
    'about': {
        'heading': {
            'name': 'About Us'
        },
        'subheading': {
            'name': 'Our History'
        },
        'details': {
            'text': "Built upon the love of small bands, we here at hijkSolutions understand what it means to have something amazing, but not have enough listeners. In his undergraduate years, Harith Khairul was the Treasurer of the Music Productions Club where he helped organize and plan open mic nights. These were events where dozens of artists beginning their music careers hope to find a space to play their music for people to hear. We hope to help you find your space for your business' song to be heard."
        }
    },
    'team': {
        'heading': {
            'name': 'Our Amazing Team'
        },
        'subheading': {
            'name': "With the knowledge and skills built to help any company, hijkSolutions' team is built to build your brand to work for you. Discover each team member's individual repertoires to visualize the breadth of industry skills that we can bring to your business."
        }
    }
};

export default content;
