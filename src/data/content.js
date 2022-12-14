import {
    faRocket,
    faPen,
    faCoins,
    faBullhorn
} from '@fortawesome/free-solid-svg-icons';

const content = {
    'navbar': {
        'brand': {
            'name': 'hijk solutions'
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
                'href': '/#blog'
            }
        ]
    },
    'header': {
        'leadIn': {
            'name': 'Helping Small Businesses Grow!'
        },
        'heading': {
            'name': 'HIJK SOLUTIONS'
        },
        'btn': {
            'name': 'TELL ME MORE',
            'href': '#'
        }
    },
    'services': {
        'heading': {
            'name': 'Services'
        },
        'subheading': {
            'name': 'Lorem ipsum'
        },
        'items': [
            {
                'name': 'Branding',
                'text': 'Whether you already have an established brand or are looking to build it from the ground up, we can help.',
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
                'text': 'From billboards to banners, our team of designers are eager to help you find the picture that tells you more than a million words ever could.',
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
                'text': "While you manage your business, we strive to help you manage your reputation. Public relations is more than social media, it's your relationship to your customers.",
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
                'text': "Image and reputation help towards your overall success as a business, but it all funnels down to marketing. Email marketing, paid advertising, word of mouth, and earned coverage are areas of knowledge that we excel at.",
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
            'text': "Built upon the love of small bands, we here at HIJK Solutions understand what it means to have something amazing, but not enough listeners. In his undergraduate years, Harith Khairul was the Treasurer of the Music Productions Club where he helped organize and plan open mic nights. These were events where dozens of artists beginning their music careers hope to find a space to play their music for people to hear. We hope to help you find your space for your business' music to be heard."
        }
    },
    'team': {
        'heading': {
            'name': 'Our Amazing Team'
        },
        'subheading': {
            'name': 'Lorem ipsum dolor sit amet consectetur.'
        }
    }
};

export default content;
