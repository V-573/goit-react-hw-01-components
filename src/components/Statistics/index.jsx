import {
SectionContainer,
    TitleSection,
    ListStatsItem,
    ListStats,
    SpanItem,




} from './Statistics.style'

const generateRndomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};


const Statistics = ({ title, data}) => {
    return (
        <SectionContainer className="statistics">
            
            <TitleSection className="title">{title}</TitleSection>
            <ListStats className="stat-list">

               { data.map((datos)=>(
                
                <ListStatsItem key={datos.id} style={{backgroundColor:generateRndomColor()}}>
                    
                            <SpanItem className="label">{datos.label}</SpanItem>
                            <SpanItem className="percentage">{datos.percentage}</SpanItem>

                    </ListStatsItem>
                
                ))}

            </ListStats>


        </SectionContainer>



  )  


}

export default Statistics;