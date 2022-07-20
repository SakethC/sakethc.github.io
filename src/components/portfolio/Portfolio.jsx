import React from 'react'
import './Portfolio.css'


const portfolio = () => {
  return (
    
    <section id='portfolio'>
     
      <h2 className='heading'> Projects </h2>
      <div className='container project_container'>
      
        <article className='project'>
          <div className='member_project'>
           
          </div>
          <h3 className='headings'>De-Binge Netflix </h3>
          <h4 className='project_points'>
            Vue.js
          </h4>
      </article>


      <article className='project2'>
          <div className='member_project'>
            
          </div>
          <h3 className='headings'>Inventory Management</h3>
          <h4 className='project_points'>
            Java
          </h4>
      </article>


      <article className='project3'>
      <div className='member_project'>
            
            </div>
          <h3 className='headings'>Healthcare Chatbot</h3>
          <h4 className='project_points'>
            Python | NLTK
          </h4> 
      </article>


      <article className='project4'>
          <div className='member_project'>
         
          </div>
             <h3 className='headings'>ICU Mortality Prediction</h3>
          <h4 className='project_points'>
            Python | Logistic Regression | Random Forest | XGBoost
            </h4>
           
      </article>



      <article className='project5'>
          <div className='member_project'>
            <h3 className='headings5'>IMDB Reviews Sentiment Analysis</h3>
          </div>
          <h4 className='project_points'>
            Python | LSTM | Attention Mechanism
           </h4>
      </article>


      <article className='project6'>
          <div className='member_project'>
            <h3 className='headings6'>Identification of Prominent Features responsible for Heart Disease Prediction</h3>
          </div>
          <h4 className='project_points'>
            Python | SVM | KNN | Random Forest | Decision Tree
           </h4>
      </article>
      </div>
    </section>
  )
}

export default portfolio