import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import Pyramid from '../pyramid/pyramid';
import { Flex } from './top10.style';

const Top10 = () => {
  console.log(JSON.parse(window.localStorage.getItem('valori')));
  const [valoriState, modificaValori] = useState(
    JSON.parse(window.localStorage.getItem('valori'))
  );

  const rank = (valori) => {
    modificaValori(valori.filme);
    window.localStorage.setItem('valori', JSON.stringify(valori.filme));
  };

  return (
    <div>
      <Formik
        initialValues={{
          filme: valoriState,
        }}
        onSubmit={rank}
      >
        {() => (
          <Form>
            <Flex>
              <FieldArray name='filme'>
                <>
                  <h1>Top 10 TV</h1>
                  {[...Array(10).keys()].map((index) => (
                    <Field
                      placeholder={index}
                      name={`filme.${index}`}
                      key={index}
                    />
                  ))}
                </>
              </FieldArray>
              <button type='submit'>Submit rank</button>
            </Flex>
          </Form>
        )}
      </Formik>
      <Pyramid list={valoriState}></Pyramid>
    </div>
  );
};

export default Top10;
