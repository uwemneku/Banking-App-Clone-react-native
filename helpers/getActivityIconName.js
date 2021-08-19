/* eslint-disable prettier/prettier */
/**
 * This function returns an icon name based on the an action taken
 */
export default function getActivityIconName(action) {
    switch (action) {
        case 'airtime':
            return 'phone-portrait-outline';
            break;
        case 'transfer':
            return 'airplane-outline';
            break;
        case 'deposit':
            return 'cash-outline';
            break;
        case 'bills':
            return 'logo-buffer';
            break;
        default:
            // throw 'action does not exist';
            break;
    }
}
