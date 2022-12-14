import content from './content';
import blogs from './blogs';

export function getServiceSlug(slug) {
    return content.services.items.filter(obj => {
        return obj.slug === slug;
    });
}

export function getBlogSlug(slug) {
    return blogs.items.filter(obj => {
        return obj.slug === slug;
    });
}