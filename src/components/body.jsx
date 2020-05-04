import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Chart from 'react-google-charts';
import {surveyData} from '../surveyData';

export default function Body() {
  const [rendered,setRendered] = useState({"0": true});
  var activeEventKey="0";

    // semantics: rendered is an object indicating whiich sections are rendered. Each key in the object
    // corresponds to the accordion eventKey. These are only needed for accordions that render a chart.

  const chartParams ={
    surveyDataURL: "https://docs.google.com/spreadsheets/d/199C0Q8OoeCLrpT6c-zc_cmfd0zUSTP-3vWaSsID4AyM",
    demoChartHeight: '400px'
  }
  
  // the following "chartEvents" structure useful for debugging chart lib 
  const chartEvents = [
    {
      eventName: "ready",
      callback({ chartWrapper }) {
        console.log('google chart ready, rendered status:');
        console.log(rendered);
      }
    }
  ];  
  
  console.log("In Body component function...");
  return (
    <Accordion class="accordion" defaultActiveKey="0" onSelect={key=>activeEventKey=key} onTransitionEnd={()=>{ console.log("transition done to elem " + activeEventKey); setRendered({activeEventKey:true})}}>

      <Card bg="dark">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <strong>Introduction</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body variant="foo">
            <p>First of all, thanks to all 163 tech leaders who took the time to fill out this year's survey. Obviously it's been a crazy last couple of months for everyone, and it's so gratifying to see the people willing to give their time and share their knowledge and experiences for the greater community Ok, let's get to it!</p>
            <p>&nbsp; &mdash; Agustin and Paul</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark">
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <strong>Executive Summary</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>43% of our respondents work in companies with $10M to $100M ARR. We've taken to calling this stage in the tech company growth cycle the <q>uncanny valley</q>. Too big to just wing it, but still too small to have put together reliable processes. Lots of companies stall at this stage, the transition from <strong>informal collaboration</strong> into <strong>reliable large-scale execution</strong>. </li>
              <li>Mainline health</li>
              <li>Small (under $10M ARR) and large (over $100M ARR) mostly manage to ship on schedule. But within that <strong>uncanny valley</strong>, companies can struggle. The data shows that companies which focus on velocity do stay on-schedule better. So, let's focus on speed this year!</li>
              <li>Almost everyone wants fewer direct reports. But how do we get there? Survey data shows a possible path: technical manager training. If this is you, check out the details on how your peers have done this cost-effectively and time-efficiently.</li>
              <li>Another thing we all seem to want is more-frequent performance reviews. Turns out the path to better feedback and more engagement is paved with lightweight and efficient <strong>review processes</strong>. It's much easier to review frequently if you don't have to reinvent the wheel each time!</li>
              <li>The survey shows two clear paths to growing your team through hiring. One involves a reliance on external recruiters, and the other involves in-house interviewer training. They both work, but one is definitely less expensive and more scalable than the other.</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <strong>Demographics: Who We Are</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>
              This year we saw an excellent diversity of responses across all layers of engineering 
              leadership. The typical respondent runs a group at a company making between $10M and 
              $100M, and has between 15 and 50 downline reports.</p>
            {
              <div>
                  <p><strong>Distribution of roles of respondents:</strong></p>
                <Chart
                    width={'100%'}
                    height={chartParams.demoChartHeight}
                    chartType="PieChart"
                    options={{backgroundColor: '#28282e', legend: {position: 'labeled', textStyle: {color: 'white'}}}}
                    loader={<div>Loading chart...</div>}
                    data={surveyData.roleData}
                />
                <p><strong>Distribution of annual recurring revenue of respondents:</strong></p>
                <Chart
                  width={'100%'}
                  height={chartParams.demoChartHeight}
                  chartType="PieChart"
                  options={{backgroundColor: '#28282e', legend: {position: 'labeled', textStyle: {color: 'white'}}}}
                  loader={<div>Loading chart...</div>}
                  spreadSheetUrl={chartParams.surveyDataURL}
                  spreadSheetQueryParameters={{gid: "207320841&range=E12:F16", headers: 1}}
                />
                <p><strong>Number of employees in the org tree:</strong></p>
                <Chart
                  width={'100%'}
                  height={chartParams.demoChartHeight}
                  chartType="PieChart"
                  loader={<div>Loading chart...</div>}
                  options={{backgroundColor: '#28282e', legend: {position: 'labeled', textStyle: {color: 'white'}}}}
                  spreadSheetUrl={chartParams.surveyDataURL}
                  spreadSheetQueryParameters={{gid: "207320841&range=E20:F25", headers: 1}}
                />
              </div>
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="3">
          <strong>Mainline Health: The Gift That Keeps Giving</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <div>
            <p>Software mainline health shows a clear trend. Smaller teams have releasable mainlines
               most of the time, but as team size grows we start to lose control! This makes sense.
               Small can manage the mainline without needing much process. But as teams grow, 
               miscommunication quickly starts to cause mainline
               breaks.
            </p>
            <p>Once companies get above 200 people, they climb out of the <b>uncanny valley </b>
               and develop processes that once again let them ship effectively. The signal is pretty clear:
               companies that manage to grow get control of their mainline by instituting the right processes.
            </p>
            {
              <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="ColumnChart"
                    loader={<div>Loading chart...</div>}
                    options={{
                      backgroundColor: '#28282e', 
                      isStacked: 'percent', 
                      legend: {textStyle: {color: 'white'}},
                      hAxis: {title: 'Team size', titleTextStyle: {color:'white'}, textStyle: {color: 'white'}},
                      vAxis: {textStyle: {color: 'white'}},
                      series: [{color:'#4285f4'}, {color:'blue'}, {color:'gold'},{color:'red'}]
                    }}
                    spreadSheetUrl={chartParams.surveyDataURL}
                    spreadSheetQueryParameters={{gid: "0&range=E3:I8", headers: 1}}
                  />
            }
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="4">
          <strong>Staying On Schedule: A Clear Key to Success</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
          <div>
            <p>
              Few would disagree that the ability to stay on schedule is important. The survey
              data shows us just how essential schedule reliability can be to success. Quite simply, companies
              that stay on schedule make more money! The correlation is strong. Small and medium teams struggle--
              more than half of such respondents reporting it difficult to stay on schedule. But 
              the big companies--despite the added complexities of larger staffs and more product lines--report 
              just the opposite. The message here is loud and clear: successful teams are teams that can produce work on
              schedule. Here's the data to prove it:  
            </p><br></br>
            <p><b>Do you find it difficult to stay on schedule?</b></p>
            {
                <Chart
                  width={'100%'}
                  height={'400px'}
                  loader={<div>Loading chart...</div>}
                  chartType="ColumnChart"
                  options={{
                    backgroundColor: '#28282e',
                    isStacked: 'percent',
                    legend: {textStyle: {color: 'white'}},
                    hAxis: {title: 'Annual Recurring Revenue ($M)', titleTextStyle: {color:'white'}, textStyle: {color: 'white'}},
                    vAxis: {textStyle: {color: 'white'}}
                  }}
                  spreadSheetUrl={chartParams.surveyDataURL}
                  spreadSheetQueryParameters={{gid: '1131955082&range=D64:F68', headers: 1}}
                />
            }
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="5">
          <strong>Direct Reports: We Want Fewer!</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <div>
              <p>
                If there's one nearly-universal fact about tech leadership, it's that we have more
                direct reports than we want. We saw that in last year's report, and this year is no
                different. Over average, we currently have 9 direct reports, but we wish we had 7.
                That's a huge difference across such a large group of leaders.
              </p>
              <p>
                So this year we tried to tease out some correlations. We want to look at the
                difference between actual and desired reports, which is a metric of dissatisfaction
                with the current situation. Call it the <strong>Direct Report Pain Index</strong>. And the
                most striking relationship we saw is between this Pain Index and organization size.
              </p>
                {
                  <Chart
                    chartEvents={chartEvents}
                    width={'100%'}
                    height={'400px'}
                    loader={<div>Loading chart...</div>}
                    chartType="ColumnChart"
                    options={{
                      backgroundColor: '#28282e',
                      legend: {textStyle: {color: 'white'}},
                      hAxis: {title: 'Team size', titleTextStyle: {color:'white'}, textStyle: {color: 'white'}},
                      vAxis: {title: 'Avg Desired Reduction', textStyle: {color: 'white'}, titleTextStyle: {color:'white'}}
                    }}
                    spreadSheetUrl={chartParams.surveyDataURL}
                    spreadSheetQueryParameters={{gid: '1089159322&range=A21:B26', headers: 1}}
                  />
                }
              <p>
                The uncanny valley strikes again! Leaders of small groups are happy enough, and so are
                leaders of large organizations. It's the orgs in the middle, probably growing fast, that are
                feeling the pain of too many direct reports. Ok, we see the problem, but what can we do 
                about it? The data showed a glimmer of hope: manager training.
              </p>
                [second chart in direct reports tab]
              <p>
                It's pretty clear. Companies that have explicit manager training programs have nearly
                three fewer direct reports! When we dug in, we got quite a few comments from leaders who
                said that implementing a lightweight and effective training program was an important aspect
                of regaining their sanity at work. And it also has the benefit of making those career-progression
                conversations at review time a lot less painful.
              </p>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="6">
          <strong>Performance Reviews: Why So Infrequent?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            <p>
              Almost half of us do performance reviews once a year, and almost half of us would like to
              be doing them every 6 months. And almost a quarter of us want to do them every 3 months. It 
              makes sense: we know that reviews are important for our people, but they're often incredibly
              time-consuming and kind of exhausting.
            </p>
              [ chart in review cycles tab]
            <p>
              So how do we achieve more-frequent reviews? The data shows one thing that could help:
              standardizing the review
              process. Companies that have a standard process only want to shorten the cycle by an average
              of 2.2 months. Those that don't have a standard process want to shorten by 3.6 months.
              Anecdotally we hear that having a standardized process, complete with leveling guides and
              other feedback collection mechanisms, makes doing reviews much less time-consuming. Employee
              happiness and engagement go up, and so does productivity. Especially for low performers, as
              we saw in last year's report.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="7">
          <strong>Technical Hiring: Two Paths</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
            <p>
              Finally we come to hiring. We've talked a lot about hiring at Essilen Research this year, as
              you may have seen. This is one of those subjects where we actually have a pretty strong opinion:
              using external recruiters for technical hires is a short-term bandaid that
              prevents scaling over the long-term. So how do we decrease our reliance on expensive and 
              often-ineffective recruiters? The answer might be training our interviewers better.
            </p>
              [chart in tech hiring tab]
            <p>
              At first it seems counter-intuitive: recruiters are about sourcing candidates, not evaluating them!
              But in fact, we've seen this a lot. There's a very high correlation between explicit interviewer
              training and overall organic investment in the hiring pipeline. We may sound like a broken record 
              sometimes, but we really believe that <strong>hiring is the most important on-going activity tech
              companies undertake</strong>. The quality of employees defines the quality of the company, and it's
              and important core competency to develop.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="8">
          <strong>Conclusions</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="8">
          <Card.Body>
            <p>
              We've covered a lot here, and hopefully you found some useful nuggets. Thanks again to everyone who 
              took the time to provide the data that made this report possible. As always, if you want to dig into
              these questions with us, please do reach out. We love talking about this stuff and we love finding
              ways to improve how tech companies grow and function.
            </p>
            <a href="https://calendly.com/essilenresearch/free-consultation">Get in touch!</a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}