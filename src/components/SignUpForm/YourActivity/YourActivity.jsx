import { Formik, Form, Field } from 'formik';
import image from '../../../assets/images/workout-fashion.png';
import './YourActivity.css';
import {
  YourActivityContainer,
  YourActivityHeader,
  Image,
  Text,
  LabelBlock,
  Label,
  InputButton,
  BackButton,
} from './YourActivity.styled';

const YourActivity = ({ goNext, goBack, data }) => {
  const handleSubmit = (values, actions) => {
    goNext(values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {() => (
        <YourActivityContainer>
          <Image src={image} alt="Illustration Activity" />
          <Form>
            <YourActivityHeader id="your-activity-group">
              Your Activity
            </YourActivityHeader>
            <Text>
              To correctly calculate calorie <br />
              and water intake
            </Text>
            <LabelBlock role="group" aria-labelledby="your-activity-group">
              <Label>
                <Field
                  type="radio"
                  name="activity"
                  value="1.2"
                  className="style"
                />
                1.2 - if you do not have physical activity and sedentary work
              </Label>
              <Label>
                <Field type="radio" name="activity" value="1.375" />
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </Label>
              <Label>
                <Field type="radio" name="activity" value="1.55" />
                1.55 - if you play sports with average loads 3-5 times a week
              </Label>
              <Label>
                <Field type="radio" name="activity" value="1.725" />
                1.725 ​​- if you train fully 6-7 times a week
              </Label>
              <Label>
                <Field type="radio" name="activity" value="1.9" />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </Label>
            </LabelBlock>
            <InputButton type="submit" onClick={goNext}>
              Next
            </InputButton>
            <BackButton type="button" onClick={goBack}>
              Back
            </BackButton>
          </Form>
        </YourActivityContainer>
      )}
    </Formik>
  );
};

export default YourActivity;
