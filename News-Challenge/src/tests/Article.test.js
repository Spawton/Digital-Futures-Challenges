import { fireEvent, render, screen } from '@testing-library/react';
import mockNewsData from '../mockNewsData.json';
import Article from '../Components/Article';
import AllStories from '../components/AllStories';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import '@testing-library/dom';

describe('Article text tests', () => {
    let mockArray = [];

    beforeEach(() => {
        mockArray = mockNewsData.response.results;
    });

    it('should test Article has bodyText', async () => {
        const mockArticle = createMemoryHistory();

        mockArticle.push(`/article/${mockArray[0].webTitle}`);
        render(
            <Router mockArticle={mockArticle}>
                <Routes>
                    <Route path='/' element={<AllStories allNewsData={mockArray} />}>
                    </Route>
                    <Route path='/article/:id' element={<Article allNewsData={mockArray} />}>
                    </Route>
                </Routes>
            </Router >
        )

        fireEvent(
            screen.getByRole('heading', { name: mockArray[0].webTitle }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        await expect(screen.getAllByTestId('bodyText')).toBeTruthy()
    })
})