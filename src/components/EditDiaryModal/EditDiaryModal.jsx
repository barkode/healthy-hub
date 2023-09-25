import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import breakfastImg2x from '../../assets/images/meal-periods/breakfast-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
import lunchImg2x from '../../assets/images/meal-periods/lunch-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
import dinnerImg2x from '../../assets/images/meal-periods/dinner-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
import snackImg2x from '../../assets/images/meal-periods/snack-2x.png';
import {
  ModalOverlay,
  ModalDiv,
  NameField,
  StyledField,
  TitleText,
  FormDiv,
  Subtitle,
  SubtitleContainer,
  ButtonSubmit,
  ButtonContainer,
  ErrorText,
  FieldContainer,
} from './EditDiaryModal.styled';
import { useDispatch } from 'react-redux';
import { updateFoodIntake } from 'redux/diary/operations';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Please Enter product name'),
  carbohydrates: yup
    .number()
    .min(0, 'you can not enter less 0')
    .required('please enter Carboh.'),
  protein: yup
    .number()
    .min(0, 'you can not enter less 0')
    .required('please enter Protein'),
  fat: yup
    .number()
    .min(0, 'you can not enter less 0')
    .required('please enter Fat'),
  calories: yup
    .number()
    .min(0, 'you can not enter less 0')
    .required('please enter Calories'),
});

const EditDiaryModal = ({ onClose, type, product }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, carbohydrates, protein, fat, calories }) => {
    const currentProduct = {
      name: name,
      carbohydrates: carbohydrates,
      protein: protein,
      fat: fat,
      calories: calories,
    };
    dispatch(
      updateFoodIntake({ id: product.id, type: type, product: currentProduct })
    );
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalDiv>
        <TitleText>Edit your meal</TitleText>
        {type === 'breakfast' && (
          <SubtitleContainer>
            <img
              srcSet={`${breakfastImg} 1x, ${breakfastImg2x} 2x`}
              src={breakfastImg}
              alt="breakfast"
              width="32"
              height="32"
            />
            <Subtitle>Breakfast</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'lunch' && (
          <SubtitleContainer>
            <img
              srcSet={`${lunchImg} 1x, ${lunchImg2x} 2x`}
              src={lunchImg}
              alt="lunch"
              width="32"
              height="32"
            />
            <Subtitle>Lunch</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'dinner' && (
          <SubtitleContainer>
            <img
              srcSet={`${dinnerImg} 1x, ${dinnerImg2x} 2x`}
              src={dinnerImg}
              alt="dinner"
              width="32"
              height="32"
            />
            <Subtitle>Dinner</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'snack' && (
          <SubtitleContainer>
            <img
              srcSet={`${snackImg} 1x, ${snackImg2x} 2x`}
              src={snackImg}
              alt="snack"
              width="32"
              height="32"
            />
            <Subtitle>Snack</Subtitle>
          </SubtitleContainer>
        )}
        <Formik
          initialValues={{
            name: product.name,
            carbohydrates: product.carbohydrates,
            protein: product.protein,
            fat: product.fat,
            calories: product.calories,
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <FormDiv>
              <FieldContainer>
                <NameField
                  name="name"
                  type="string"
                  borderstyle={
                    errors.name && touched.name
                      ? '1px solid var(--input-border-color-error)'
                      : ''
                  }
                />
                <ErrorMessage name="name">
                  {msg => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </FieldContainer>
              <FieldContainer>
                <StyledField
                  type="number"
                  name="carbohydrates"
                  borderstyle={
                    errors.carbohydrates && touched.carbohydrates
                      ? '1px solid var(--input-border-color-error)'
                      : ''
                  }
                />
                <ErrorMessage name="carbohydrates">
                  {msg => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </FieldContainer>
              <FieldContainer>
                <StyledField
                  type="number"
                  name="protein"
                  borderstyle={
                    errors.protein && touched.protein
                      ? '1px solid var(--input-border-color-error)'
                      : ''
                  }
                />
                <ErrorMessage name="protein">
                  {msg => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </FieldContainer>
              <FieldContainer>
                <StyledField
                  type="number"
                  name="fat"
                  borderstyle={
                    errors.fat && touched.fat
                      ? '1px solid var(--input-border-color-error)'
                      : ''
                  }
                />
                <ErrorMessage name="fat">
                  {msg => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </FieldContainer>
              <FieldContainer>
                <StyledField
                  type="number"
                  name="calories"
                  borderstyle={
                    errors.calories && touched.calories
                      ? '1px solid var(--input-border-color-error)'
                      : ''
                  }
                />
                <ErrorMessage name="calories">
                  {msg => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </FieldContainer>
              <ButtonContainer>
                <ButtonSubmit
                  type="reset"
                  style={{
                    color: 'var(--text-color-secondary-grey)',
                    background: 'transparent',
                  }}
                >
                  Cancel
                </ButtonSubmit>
                <ButtonSubmit type="submit">Confirm</ButtonSubmit>
              </ButtonContainer>
            </FormDiv>
          )}
        </Formik>
      </ModalDiv>
    </ModalOverlay>
  );
};

export default EditDiaryModal;
