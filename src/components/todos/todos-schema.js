import * as yup from 'yup';

export const TodosSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  dueDate: yup.date().required()
    .min(new Date(), 'Due date must be in the future')
    .typeError('Due date is required')
  ,
  priority: yup.string().required()
});