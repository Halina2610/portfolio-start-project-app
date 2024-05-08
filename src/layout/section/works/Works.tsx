import React, {useEffect, useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Work} from "./work/Work";
import {TabMenu} from "./work/TabMenu";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {GridWrapper} from "../../../components/GridWrapper";
import {WorkItem, workItems} from "../../../data/workItem";

export type FilterType = "All" | "SPA" | "Landing";



const menuItems: FilterType[] = ["All", "SPA", "Landing"];


const Works: React.FC = () => {
    const [filteredWorks, setFilteredWorks] = useState<WorkItem[]>([]);
    const [activeFilter, setActiveFilter] = useState<FilterType>("SPA");


    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredWorks(workItems);
        } else {
            const filtered = workItems.filter((work) => work.category === activeFilter);
            setFilteredWorks(filtered);
        }
    }, [activeFilter]);


    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
    };

    return (
        <StyledWorks id="section3">
            <SectionTitle>My Works</SectionTitle>
            <Container>
                <TabMenu menuItems={menuItems} activeFilter={activeFilter} onFilterChange={handleFilterChange}/>
                <GridWrapper templateColumns="1fr 1fr" gap="20px">
                    {filteredWorks.map((work, index) => (
                        <Work
                            key={index}
                            title={work.title}
                            text={work.text}
                            img={work.img}
                            hrefDemo={work.hrefDemo}
                            hrefCode={work.hrefCode}
                        />
                    ))}
                </GridWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${GridWrapper} {
    @media ${Theme.media.tablet} {
      grid-template-columns: 1fr;
    }
  }
`;

export default Works;