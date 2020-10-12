import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import './HorizontalStepper.scss';


  
  export default function HorizontalStepper() {
 

      return (
          <div className="stepper">
                <Stepper alternativeLabel activeStep={-1}>
                    <Step>
                        <StepLabel>
                          <b>Research (1 week)</b><br/>
                          Secondary Search<br/>
                          User Interview<br/>
                          Affinity Diagramming<br/>
                          Persona<br/>
                          User Task Flow<br/>
                          Usability Test
                          </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        <b>Design (1 week)</b><br/>
                          Sketches<br/>
                          Wireframing<br/>
                          High Fidelity Prototype in Figma<br/>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        <b>Development (2 weeks)</b><br/>
                          UI Layout<br/>
                          Implement functionalities<br/>
                          Refractor<br/>
                          Deploy<br/>
                        </StepLabel>
                    </Step>
                </Stepper>

              
          </div>
      )
  }
  