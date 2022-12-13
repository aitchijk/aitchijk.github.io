import content from './content';

export function getServiceSlug(slug) {
    return content.services.items.filter(obj => {
        return obj.slug === slug;
    });
}