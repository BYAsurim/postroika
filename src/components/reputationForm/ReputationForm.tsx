import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import s from './ReputationForm.module.css'
import button from '../../featuers/reputation/Reputation.module.css'
import closeIcon from "../../images/closeOutline.svg";

type Props = {
    isOpen: (value:boolean)=>void
}
export const ReputationForm = ({isOpen}:Props) => {
    return (
        <div className={s.wrapper}>
            <h3 className={s.h3}>ОСТАВИТЬ ОТЗЫВ</h3>
            <button className={s.closeIcon}>
                <img src={closeIcon} alt="close" onClick={() => isOpen(false)}/>
            </button>
            <Formik
                initialValues={{name: '', message: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        // errors.email= 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
                    ) {
                        // errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                            <Field as={'textarea'} name="message" className={s.field} placeholder={'Отзыв'}/>
                            <ErrorMessage name="message" component="div"/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className={`${button.addReview} ${s.button}`}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

