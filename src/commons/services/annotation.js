import localStorage from 'commons/utils/localStorage';
import { ANNOTATION_LOCAL_STORAGE_KEY } from 'commons/constants';

export default {
  getAnnotation: id => {
    const annotation = localStorage.get(ANNOTATION_LOCAL_STORAGE_KEY);
    return !!annotation ? (annotation[id] || '') : '';
  },
  saveAnnotation: ({id, annotation}) => {
    const annotations = localStorage.get(ANNOTATION_LOCAL_STORAGE_KEY) || {};

    annotations[id] = annotation;
    localStorage.set(ANNOTATION_LOCAL_STORAGE_KEY, annotations);

    return annotation;
  }
}