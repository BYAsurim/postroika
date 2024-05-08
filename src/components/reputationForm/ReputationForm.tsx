import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import s from './ReputationForm.module.css'
import button from '../../featuers/reputation/Reputation.module.css'
import closeIcon from "../../images/closeOutline.svg";
import {useAppDispatch} from "../../common/hooks/hooks";
import {addReview} from "../../featuers/reputation/reputation.reduser";

type Props = {
    isOpen: (value: boolean) => void
}
export const ReputationForm = ({isOpen}: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div className={s.wrapper}>
            <h3 className={s.h3}>ОСТАВИТЬ ОТЗЫВ</h3>
            <button className={s.closeIcon}>
                <img src={closeIcon} alt="close" onClick={() => isOpen(false)}/>
            </button>
            <Formik
                initialValues={{name: '', comment: ''}}
                validate={values => {
                    if (!values.name) {
                        return {
                            name: 'Name is required'
                        }
                    }
                    else if(!values.comment) {
                        return {
                            comment: 'comment is required'
                        }
                    }
                    // else if (/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(values.name)) {return {name: 'send correctly name'}}
                }}
                onSubmit={(values) => {
                    dispatch(addReview({name: values.name, comment: values.comment}))
                    isOpen(false)
                }}
            >
                {({isSubmitting}) => (
                    <Form className={s.formWrapper}>
                        <div className={s.wrapperTitleAndField}>
                            <span className={s.titleField}>Ваше имя</span>
                            <Field name="name" className={s.field} placeholder={'Имя'}/>
                            <ErrorMessage name="name" component="div"/>
                        </div>
                        <div className={s.wrapperTitleAndField}>
                            <span className={s.titleField}>Отзыв</span>
                            <Field as={'textarea'} name="comment" className={s.field} placeholder={'Отзыв'}/>
                            <ErrorMessage name="comment" component="div"/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className={`${button.addReview} ${s.button}`}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

